// // creating an array and passing the number, questions, options, and answers
// let questions = [
//     {
//     numb: 1,
//     question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
//     answer: "Amazon EC2 instances can be launched on demand when needed",
//     justification:" C –The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load.",
//     options: [
//       "Amazon EC2 costs are billed on a monthly basis",
//       "Users retain full administrative access to their Amazon EC2 instances.",
//       "Amazon EC2 instances can be launched on demand when needed",
//       "Users can permanently run enough instances to handle peak workloads."
//     ]

//   },
//     {
//     numb: 2,
//     question: "Which AWS service would simplify the migration of a database to AWS?",
//     answer: "AWS Database Migration Service (AWS DMS)",
//     justification:" B – AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.",
//     options: [
//       "AWS Storage Gateway",
//       "AWS Database Migration Service (AWS DMS)",
//       "Amazon EC2",
//       "Amazon AppStream 2.0"
//     ]
//   },
//     {
//     numb: 3,
//     question: "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
//     answer: "AWS Marketplace",
//     justification:"D – AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.",    
//     options: [
//       "AWS Config",
//       "AWS OpsWorks",
//       "AWS SDK",
//       "AWS Marketplace"
//     ]
//   },
//     {
//     numb: 4,
//     question: "Which AWS networking service enables a company to create a virtual network within AWS?",
//     answer: "Amazon Virtual Private Cloud (Amazon VPC)",
//     justification:"D – Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.",
//     options: [
//       "AWS Config",
//       "Amazon Route 53",
//       "AWS Direct Connect",
//       "Amazon Virtual Private Cloud (Amazon VPC)"
//     ]
//   },
//     {
//     numb: 5,
//     question: "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
//     answer: "Maintaining physical hardware",
//     justification:"B – Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.",
//     options: [
//       "Configuring third-party applications",
//       "Maintaining physical hardware",
//       "Securing application access and data",
//       "Managing guest operating systems"
//     ]
//   },
//   {
//     numb: 6,
//     question: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
//     answer: "Edge locations",
//     justification:"B – To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide.",
//     options: [
//       "AWS Regions",
//       "Edge locations",
//       "Availability Zones",
//       "Virtual Private Cloud (VPC)"
//     ]
//   },
//   {
//     numb: 7,
//     question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
//     answer: "Enable multi-factor authentication",
//     justification:" C – Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.",
//     options: [
//       "Use Amazon Cloud Directory",
//       "Audit AWS Identity and Access Management (IAM) roles",
//       "Enable multi-factor authentication",
//       "Enable AWS CloudTrail"
//     ]
//   },
//   {
//     numb: 8,
//     question: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
//     answer: "AWS CloudTrail",
//     justification:"B – AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.",
//     options: [
//       "AWS Trusted Advisor",
//       "AWS CloudTrail",
//       "AWS X-Ray",
//       "AWS Identity and Access Management (AWS IAM)"
//     ]
//   },
//   {
//     numb: 9,
//     question: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
//     answer: "Amazon Simple Notification Service (Amazon SNS)",
//     justification:" A – Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.",
//     options: [
//       "Amazon Simple Notification Service (Amazon SNS)",
//       "AWS CloudTrail",
//       "AWS Trusted Advisor",
//       "Amazon Route 53"
//     ]
//   },
//   {
//     numb: 10,
//     question: "Where can a user find information about prohibited actions on the AWS infrastructure?",
//     answer: "AWS Acceptable Use Policy",
//     justification:"D – The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure",
//     options: [
//       "AWS Trusted Advisor",
//       "Maintaining physical hardware",
//       "AWS Billing Console",
//       "AWS Acceptable Use Policy"
//     ]
//   },

 
// ];






// function getQuestions(){
let data = [];
// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();


let questions=[];
// Define a callback function
xhttp.onreadystatechange = function(){
  // Here you can use the Data
   if(this.readyState ===4 && this.status ===200){
    
    data = JSON.parse(this.responseText)
    console.log(data);
    for(let i=0;i<data.length;i++){
       let options=[];
       options.push(data[i].option1);
       options.push(data[i].option2);
       options.push(data[i].option3);
       options.push(data[i].option4);


      // questions.push({question:data[i].question});
      // questions.push({answer:data[i].answer});
      // questions.push({justification:data[i].justification});
      questions.push({numb :data[i].id ,justification:data[i].justification, options:options,answer:data[i].answer,question:data[i].question});
  
    }
   }
}
console.log(questions);

// Send a request
xhttp.open("POST", "http://localhost/quiz-aws-backend/dataAjax.php",true);
xhttp.send();
// }
// getQuestions();




// function getData(){
//   fetch("http://localhost/quiz-aws-backend/dataAjax.php").then(Response => Response.json()).then((data) =>{
//   console.log(data);
//     for(let i=0;i<data.length;i++){
//        let options=[];
//        options.push(data[i].option1);
//        options.push(data[i].option2);
//        options.push(data[i].option3);
//        options.push(data[i].option4);


//       // questions.push({question:data[i].question});
//       // questions.push({answer:data[i].answer});
//       // questions.push({justification:data[i].justification});
//       questions.push({numb :data[i].id ,justification:data[i].justification, options:options,answer:data[i].answer,question:data[i].question});

//     }  
// });

  
// }

// getData();