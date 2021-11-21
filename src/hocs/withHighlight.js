import { Component } from 'react';
import Popular from '../components/List/items/highlight/Popular';
import New from '../components/List/items/highlight/New';

export default function withHighlight(WrappedComponent) {
  class withHighlight extends Component {
    render() {
      if (this.props.views >= 1000) {
        return <Popular><WrappedComponent {...this.props} /></Popular>;
      } else if (this.props.views < 100) {
        return <New><WrappedComponent {...this.props} /></New>;
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  withHighlight.displayName = `withHighlight(${wrappedComponentName})`;
  return withHighlight;
}
