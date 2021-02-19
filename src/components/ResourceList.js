import Article from './Article.js';
import '../List.css';
import resources from '../resources-list.json';

const List =() => {
  return (
      <div className="List tc">
          {resources.map(printCard)}
    </div>
  );
}

const printCard = (resource, index) => {
    return <Article key={index} id={index}/>;
}
export default List;
