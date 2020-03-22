
// https://www.robinwieruch.de/react-fetching-data 
// ????
// const withFetching = (url, query) => (Comp) =>
const withFetching = (url) => (Component) =>
class WithFetching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: false,
      error: null,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(url)
      .then(result => this.setState({
        data: result.data,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }
  render() {
    return <Component { ...this.props } { ...this.state } />;
  }
}

const App = ({ data, isLoading, error }) => {
    if (!data) {
      return <p>No data yet ...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <ul>
        {data.hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    );
  }