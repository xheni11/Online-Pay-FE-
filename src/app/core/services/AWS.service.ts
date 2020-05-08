import { Injectable } from "@angular/core";
import { S3 } from "aws-sdk/clients/all";
import { aws } from "src/app/modules/share/helpers/s3-properties";

@Injectable({
  providedIn: "root",
})
export class AWSService {
  bucket = new S3({
    accessKeyId: aws.keyId,
    secretAccessKey: aws.accessKey,
    region: aws.region,
  });
  constructor() {}
  uploadFile(file) {
    const contentType = file.type;

    const params = {
      Bucket: aws.bucketName,
      Key: 1 + file.name,
      Body: file,
      ACL: aws.ACL,
      ContentType: contentType,
    };
    this.bucket.upload(params, function (err, data) {
      if (err) {
        console.log("There was an error uploading your file: ", err);
        return false;
      }
      console.log("Successfully uploaded file.", data);
      return true;
    });
  }
  downloadFile() {
    const params = {
      Bucket: aws.bucketName,
      Key: 1 + "/3EBB0D85-C125-42E7-AAB9-FC1D4A4E1522.jpeg",
    };
    return this.bucket.getObject(params).promise();
  }
}
