import {Amplify} from 'aws-amplify'
import { generateClient } from 'aws-amplify/api';
import { updatePizzaOrderStatus, addPizzaOrder } from './graphql/mutations';
import { onAddPizzaOrder } from './graphql/subscriptions';
import { useEffect } from 'react';
Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://biry4gvwu5gefarb2vom2nn244.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-lcmavmzgs5h6dh77qzga4lj3xq'
    }
  }
});

function App() {
  const client = generateClient()
  useEffect(() => {
    console.log('hey')
    const createSub = client
    .graphql({ query: onAddPizzaOrder, variables: { id: '56cc9a79-88ec-44ff-be1a-adb850594ab9' }})
    .subscribe({
      next: ({ data }) => console.log(data),
      error: (error) => console.warn(error)
    });
  }, [])


  const handleSubmit = async (e) => {
//send api request
    e.preventDefault();
    console.log('hey working')
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log(value)
    if(value.id){
      const updatedOrder = await client.graphql({
        query: updatePizzaOrderStatus,
        variables: {
          id: value.id,
          status: 'READY'
        }
      });
      console.log('updated', updatedOrder)
    }else {

      const createdOrder =await client.graphql({
        query: addPizzaOrder,
        variables: value
      });
      console.log('updated', createdOrder)
    }




  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name='crust' placeholder="crust"/>
        <input name='ingredients' placeholder="ingredients"/>
        <input type="text" name='id' />
        <button>Submit</button>
      </form>



    </>
  )
}

export default App
