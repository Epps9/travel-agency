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
  tags: tag => dispatch(changeTags(tag)),
  // TODO - add more dispatchers for other filters
  duration: duration => dispatch(changeDuration(duration)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
