import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeTags, changeDuration} from '../../../redux/filtersRedux';


const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeTags: tag => dispatch(changeTags(tag)),
  changeDuration: duration => dispatch(changeDuration(duration)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
