import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import Wrapper from '../components/Wrapper'

const getVisibleMinifigures = ({ minifigures, collections }) => {
  return collections.map(collection => {
    const currentCollection = collection;
    currentCollection.minifigures = minifigures.filter(minifigure => minifigure.collectionId === collection.id);
    return currentCollection;
  });
}

const mapStateToProps = (state, ownProps) => ({
  collections: getVisibleMinifigures({
    minifigures: state.minifigures,
    collections: state.collections
  })
})

const VisibleCollection = connect(
  mapStateToProps
)(Wrapper)

export default VisibleCollection
