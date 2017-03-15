This proj is cloned from [reason-react-example](https://github.com/chenglou/reason-react-example)

![completed todoMVC](reason-react-example/Reason-react-todo.png)

Set up OCaml first on Mac OS
```
brew update
brew install ocaml
brew install opam
```

Then start to init it and switch it BuckleScript
```
opam init
opam switch 4.02.3+buckle-master
eval `opam config env`
```

Now follow the normal procedure
```
git clone https://github.com/chenglou/reason-react-example.git
cd reason-react-example
npm install
npm start
# in another tab
npm run build
```

After you see the webpack compilation succeed (the `npm run build` step), open up the html files in `src/*`! Then modify whichever file in `src` and refresh the page to see the changes.

Then add two plugins to webpack.config.js.
One is the built-in uglify. The other is compression.
```
npm i -D compression-webpack-plugin
```
Through these two plugins, the size of TodoMVC reduced from 1M, to 296K, then 86KB. Impressive.


