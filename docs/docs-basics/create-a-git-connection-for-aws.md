---
sidebar_position: 2
---


# Create a Git connection for AWS

## Configure your AWS account and Preferred Git Provider. 

- Click on **Account** at the bottom left of your dashboard.

- Click On **Git Connections** and create a new connection.

- When you click on **Create Connection** a popup should show looking like the fil;lowing:

![](https://i.imgur.com/nMRGFLW.png)

- In Step 1, Connect your Github Account to Clouddley. A popup will appear asking you to install Clouddley and select the username or organization you want to connect.


![](https://i.imgur.com/SdBi3tR.png)

- Select your Account and finish the configuration by Clicking on **Install & Authorize**. You should be redirected back to Clouddley with a blue tick. It should look like this:


![](https://i.imgur.com/326n7Su.png)

Awesome! You have finished the first step.

- We need now configure the same **Github Account** to AWS

:::caution

Ensure you connect the same Account for this step if you connected an `example` user or organization for Step 1. Please use the same `example` user or organization for AWS.
:::

- In Step 2, Configure the following git provider you want to use. Select **GitHub** as your preferred provider.

- Enter the connection name; Clouddley will use the connection name to link your Account to AWS. Also, select your preferred region for your app deployments. Finally, Click on the Cloud Secret key you want to use for this connection.

- Go ahead and Connect it. You should see something like this:

![](https://i.imgur.com/IPRW2Rx.png)

- Click on Finish.

You have successfully created a connection!


- Head over to your AWS console by clicking on the **Finish this configuration on your AWS console**

![](https://i.imgur.com/ESvwTgg.png)

- You should see the following:

![](https://i.imgur.com/B9G223l.png)

- Click the connection name you created, and click on the **Complete handshake** button. A popup should appear asking to Configure and Install the **AWS Connector for Github**. Use the same username or organization you authenticated with Clouddley here and finish the Installation.

![](https://i.imgur.com/KWmHbQk.png)

- After that, You should see a notification showing **Handshake complete**. You will also notice that the name of your connection is now **Available**. This is what it looks like below:

![](https://i.imgur.com/MPk5IiG.png)

Great, You have finished Step 2.

- Head over to Clouddley and click on **Done**. You will see your connection name showing **Pending**. Click on the **refresh** logo by the top left of your card to sync the changes. Your status will change to **Available**

You are all set and done. Well Done!


