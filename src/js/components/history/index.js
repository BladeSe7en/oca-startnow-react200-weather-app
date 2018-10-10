import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
    return {
        prevSearch: store.search.prevSearch
    };
}

export default connect(mapStoreToProps)(History);