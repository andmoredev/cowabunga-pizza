import {Amplify} from 'aws-amplify'
import { generateClient } from 'aws-amplify/api';
import { updatePizzaOrderStatus, addPizzaOrder } from './graphql/mutations';
import { onPizzaOrderStatusChange } from './graphql/subscriptions';
import { useEffect } from 'react';
Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://4l7zqdhq6jefrmabjd6ks3mshe.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-vkkjpkmzubftjhztgem7er2qmu'
    }
  }
});

function App() {
  const client = generateClient()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    if(value.id){
      const updatedOrder = await client.graphql({
        query: updatePizzaOrderStatus,
        variables: {
          id: value.id,
          status: value.status
        }
      });
      console.log('updated', updatedOrder)
    }else {

      const createdOrder =await client.graphql({
        query: addPizzaOrder,
        variables: value
      });
      console.log('created', createdOrder)

      const orderId = createdOrder.data.addPizzaOrder.id

      const createSub = client
        .graphql({ query: onPizzaOrderStatusChange, variables: { id: orderId }})
        .subscribe({
          next: ({ data }) => console.log('subscription', data),
          error: (error) => console.warn(error)
        });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name='crust' placeholder="crust"/>
        <input name='ingredients' placeholder="ingredients"/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
