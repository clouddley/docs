---
sidebar_position: 4
---



# Create an Application

## Configure and deploy your application to AWS via Clouddley

- Click on **Apps** on your dashboard and select the connection you created from the dropdown.

![](https://i.imgur.com/6V6GONC.png)

- Select the repository of the app you want to deploy. You can also search for the app you want to deploy. Go ahead and select the branch you want to deploy

- Under the App Configuration, select the project under which you want to deploy your app and type in the application's name.

![](https://i.imgur.com/zLiAumx.png)


- Select the repository type. By default, **Source Code** is selected, but you can use container deployment if you have a `dockerfile` in your repository.

- Select the preferred runtime from our available runtimes and enter your build and run command.

:::info

For a Node.js project, you can select *Nodejs 12,* *Nodejs 14,* or *Nodejs 16* runtimes.

Build command

```bash=
npm install
```

Run command
```bash=
npm start
```
:::

- Configure your service setting. Set your PORT and environment variables. The default PORT number is `8080`.

- Configure your health Checks, By default, It has been set, but you can choose to configure it to what works for you.

- Go ahead and click on the **Next** button to see the preview of your configuration and make any changes that need to be made.

- Click on the **Create** button, and you will get a notification that your app is being created. You will show see the image below:

![](https://i.imgur.com/fmbitlb.png)

- It takes 2-5 mins to deploy, depending on how heavy your application is.

- When the app is deployed, a clouddley url is generated, and your `App Status` will change from `DEPLOYING...` to  `RUNNING.` You should see something like this:

![](https://i.imgur.com/xoMwdsb.png)

:::tip

A clouddley url looks like this `https://<app-name>-<generated-values>.clouddley.app`
:::


That's it.
