import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
	const tron = Reactotron.configure().use(reactotronRedux()).use(sagaPlugin()).connect({ port: 3000 });

	tron.clear();
	console.tron = tron;
}
