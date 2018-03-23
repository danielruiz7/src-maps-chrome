declare module 'meteor/jalik:ufs';

declare module '*';

declare module Mongo {
  interface Collection<T> {
    aggregate(args: any, filter: any): Array<any>;
  }
}
