# Leonardo Pottmayer - MTV API

API de frases [LINK](https://mtv.pottmayer.dev).

## Descrição

Este projeto é divido em Client e API, este é o client. A ideia do projeto é ter uma base de frases, e alguém possa acessar
a aplicação sempre que quiser e buscar uma frase (normalmente motivacional). O client está dividido em duas partes (user e admin).
O usuário comum não necessita de autenticação e pode apenas acessar a página principal ("/") da aplicação para ver uma frase. Sempre que a página
é aberta ou atualizada é realizado um fetch de alguma frase aleatória na base. Já o administrator precisa se autenticar, após realizar o login
o usuário pode cadastrar, editar ou remover frases através de um CRUD simples.
Nesta aplicação utilizei React.js para o frontend, uma API node/express para o backend, MongoDB para guardar as frases e JWT para criar os tokens
de autenticação necessários.

O registro de usuários está disponível, porém, por motivos de segurança há uma trava, ao criar um usuário ele fica com um status de bloqueado,
impossibilitando o login até que outro usuário realize o desbloqueio. Por isso em caso de clone do repositório será possível apenas utilizar a
parte do usuário comum.

Abaixo você encontra as instruções padrão para rodar o projeto, fornecidas pela própria biblioteca React.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
