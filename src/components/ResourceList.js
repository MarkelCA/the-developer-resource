import Article from './Article.js';
import '../css/List.css';
import resources from '../resources-list.json';

const List =() => {
  return (
      <div className="List tc bg-blue-500 p-5">
          {resources.map(printCard)}
    </div>
  );
}

const printCard = (resource, index) => {
    return <Article key={index} id={index}/>;
}
export default List;
