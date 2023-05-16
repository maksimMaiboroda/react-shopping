import { connect } from "react-redux";
import { setFilter, setSearchQuery } from "../actions/filter";
import Filter from "../components/Filter/Filter";

const mapStateToProps = ({ filter }) => ({
  filterBy: filter.filterBy,
  searchQuery: filter.searchQuery

});

export default connect(mapStateToProps, { setFilter, setSearchQuery })(Filter);
