import { collection } from "./db";

type Subscription = {
  endpoint: string;
  keys: {
    p256dh: string;
    auth: string;
  };
};

const subscriptionCollection = () => collection<Subscription>("subscription");

export const subscribe = (newSubscription: Subscription) => {
  return subscriptionCollection().insertOne(newSubscription);
};
