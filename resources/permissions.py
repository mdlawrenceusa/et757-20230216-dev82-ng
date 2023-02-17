import boto3
import json

S3API = boto3.client("s3", region_name="us-east-1") 
bucket_name = "c72669a1464075l3421225t1w412817738288-s3bucket-5toohswok57w"

policy_file = open("/home/ec2-user/environment/resources/public_policy.json", "r")


S3API.put_bucket_policy(
    Bucket = bucket_name,
    Policy = policy_file.read()
)
print ("Setting Permissions - DONE")