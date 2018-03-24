# Will's notes

## this is not primetime stuff- I'm just learning!

[create](https://github.com/facebook/create-react-app)

Any state change triggers a rerender


npx create-react-app my-app
cd my-app
npm start

COMPONENTS
react.createclass is DEPRECATED
render is oblig


new is  
class App extends Component {
render()
}
class is reserved in js so within jsx we use className

## PROPS
It's common to create
const { text } = this.props;
to avoid having to do this.props repeatedly

## STATE 
state is an object
If you define state within a component it is only visible/available within same.

## LIFE CYCLE OF COMPONENTS-METHODS
compenentWillMount()
componentDidMount()

or just
constructore(props){
    super(props);
}

used when you need to do something before comp is rendered etc

componentDid will trigger a rerender

"componentwillreceiveprops" etc
"shouldcompupdate"?  for performant
willcompupdate?

[docs](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)

 [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)

## controlled vs uncontrolled inputs

you can leave it as is or put it through a loop of rerender with a trim or whatever you want...


=========================

yarn add prop-types

=======================
cannot set defaul props on a nested property.

should always have .isrequired or a default prop
-----------
select in dev tools then in console $r will show the entire component


npm install --save-dev eslint eslint-config-airbnb eslint-plugin-react

------------------------

react-router-dom
is the client side specific version

wrap the main app in it and it adds loads of useful stuff like history...

Only one router per app and should go at the root