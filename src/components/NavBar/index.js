import { connect } from 'react-redux';
import History from './history';

function mapStoreToProps(store) {
    return {
        prevSearch: store.search.prevSearch
    };
}

export default connect(mapStoreToProps)(History);