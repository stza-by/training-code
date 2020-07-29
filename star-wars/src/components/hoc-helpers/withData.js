import React, {Component} from 'react';
import Spinner from '../Spinner';

const withData = (View) => {
  return class extends Component {

    state = {
      isLoading: true,
      items: []
    }

    async componentDidMount() {
      const items = await this.props.getData();
      this.setState({ items, isLoading: false });
    }
  
    render() {
      const {isLoading, items} = this.state;

      if (isLoading) return <Spinner />;

      return <View {...this.props} items={items} />;
    }
  }
}

export default withData;