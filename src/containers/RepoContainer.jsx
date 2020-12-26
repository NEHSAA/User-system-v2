import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

class RepoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repoList: [] };
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.getRepoList();
  }

  getRepoList = async () => {
    const { data: repoList } = await axios.get('https://api.github.com/users/NEHSAA/repos');
    this.setState({ repoList });
  }

  render() {
    const { repoList } = this.state;
    return repoList.map((item) => {
      const { name, id } = item;
      return (
        <Typography key={id}>
          {name}
        </Typography>
      );
    });
  }
}

export default RepoContainer;
