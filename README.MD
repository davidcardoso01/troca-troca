## Instalando o projeto:
1 - Instalar o node.js
2 - Instalar o cocoapods
3 - git clone git@github.com:davidcardoso01/troca-troca.git
4 - cd troca-troca
5 - npm install
6 - npm install -g react-native-cli
7 - Instalar JAVA JDK
8 - npm install react-native-image-picker
9 - npm install react-native-gesture-handler
10 - npm install react-native-vector-icons
11 - npm install react-native-linear-gradient
12 - npm install react-native-camera
13 - npm install react-native-permissions
14 - Configurar troca-troca/android/local.properties para a home do android studio
15 - cd troca-troca/ios
16 - pod install
17 - Abrir TrocaTroca.xcworkspace no XCODE e executar projeto

## Iniciando JSON server

Intale o JSON Server 

```
npm install -g json-server
```

Navegue até a pasta `/src/api/`

Execute o comando

```bash
json-server --watch db.json
```

Agora você pode executar os requests no endereço [http://localhost:3000/usuarios/1](http://localhost:3000/usuarios/1)

### Recursos disponíveis:
- [http://localhost:3000/usuarios](http://localhost:3000/usuarios)
- [http://localhost:3000/anuncios](http://localhost:3000/anuncios)
- [http://localhost:3000/categorias](http://localhost:3000/categorias)
- [http://localhost:3000/mensagens](http://localhost:3000/mensagens)