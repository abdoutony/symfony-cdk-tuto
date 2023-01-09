import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

interface SymfonyAppProps extends cdk.StackProps {
  readonly dev: boolean;
}



export class SymfonyAppStack extends cdk.Stack {
  //scope: Construct, id: string, props?: cdk.StackProps
  constructor(scope: Construct, id: string, props: SymfonyAppProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'SymfonyAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
