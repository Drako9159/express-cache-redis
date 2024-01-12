

## 🌟 What is including this template?

1. 🐳 Fully dockerized service ready for development and production environments with the best practices for docker, trying to provide a performance and small image just with the code we really need in your environments.
2. 👷 Use [SWC](https://swc.rs/) for compiling and running the tests of the service.
3. ⚡️ Configure [Express](https://expressjs.com/) as HTTP framework.
4. 🐶 Integration with [husky](https://typicode.github.io/husky/) to ensure we have good quality and conventions while we are developing like:
   - 💅 Running the linter over the files that have been changed
   - 💬 Use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to ensure our commits have a convention.
   - ✅ Run the tests automatically.
   - ⚙️ Check our project does not have type errors with Typescript.
5. 🧪 Testing with [Jest](https://jestjs.io/es-ES/) and [supertest](https://github.com/ladjs/supertest) for unit and e2e tests.
6. 🤜🤛 Combine unit and e2e test coverage. In the services we may have both type of tests, unit and e2e tests, and usually we would like to see what is the combined test coverage, so we can see the full picture.

## 🧑‍💻 Developing

First, we will need to create our .env file, we can create a copy from the example one:

```bash
cp .env.example .env
```

The project is fully dockerized 🐳, if we want to start the app in **development mode**, we just need to run:

```bash
docker-compose up -d my-service-dev
```

This development mode with work with **hot-reload** and exposing a **debug port**, the `9229`, so later we can connect from our editor to it.

Now, you should be able to start debugging configuring using your IDE. For example, if you are using vscode, you can create a `.vscode/launch.json` file with the following config:

```json
{
  "version": "0.1.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to docker",
      "restart": true,
      "port": 9229,
      "remoteRoot": "/project"
    }
  ]
}
```

Also, if you want to run the **production mode**, you can run:

```bash
docker-compose up -d my-service-production
```

This service is providing just a health endpoint which you can call to verify the service is working as expected:

```bash
curl --request GET \
  --url http://localhost:3000/health
```

If you want to stop developing, you can stop the service running:

```bash
docker-compose down
```

## ⚙️ Building

```bash
npm run build
```

## ✅ Testing

The service provide different scripts for running the tests, to run all of them you can run:

```bash
npm run test
```

If you are interested just in the unit tests, you can run:

```bash
npm run test:unit
```

Or if you want e2e tests, you can execute:

```bash
npm run test:e2e
```

## 💅 Linting

To run the linter you can execute:

```bash
npm run lint
```

And for trying to fix lint issues automatically, you can run:

```bash
npm run lint:fix
```
