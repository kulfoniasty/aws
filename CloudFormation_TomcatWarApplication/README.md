# CloudFormation Simple Tomcat WAR application

This directory contains a CloudFormation template of an ElasticBeanstalk application deploying simple WAR Hello-World-like application in a load balanced environment. At startup it has 2 instances scaled up to max 6 when load increases.
 
### Template parameters
* `KeyName`: Name of your key used when deploying new EC2 instances
* `VPC`: Name of your Virtual Private Cloud
* `Subnet`: Any subnet within your VPC
* `Bucket`: name of a bucket where the WAR application is stored
* `WARfile`: path to a war file. If you store a file in a root of your bucket you it is simply a filename like `app.war`

### 1. Create a bucket
```
aws s3 mb s3://your.unique.bucket.name
```
### 2. Upload a WAR
```
aws s3 cp ./java-app/build/libs/java-app-1.0.war s3://your.unique.bucket.name/war-file-name
```
### 3. Create CloudFormation stack 
```
aws cloudformation create-stack --stack-name=simple-war-app --template-body=file:///path-to-the-template/ebs.template --parameters ParameterKey=KeyName,ParameterValue=EC2key ParameterKey=VPC,ParameterValue=vpc-c3df58aa ParameterKey=Subnet,ParameterValue=subnet ParameterKey=Bucket,ParameterValue=your.bucket ParameterKey=WARfile,ParameterValue=WARname --capabilities CAPABILITY_IAM
```
### 4 Check your stacks using AWS console
And navigate to the LoadBalancer resource and its DNS