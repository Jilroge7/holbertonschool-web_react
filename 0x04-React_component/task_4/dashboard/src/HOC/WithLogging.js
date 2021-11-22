import React, { Component } from 'react';

export default function withLogging(WrappedComponent) => {
  class WithLogging extends React.Component {
    componentDidMount() {
      const wrappedName = getDisplayName(WrappedComponent);
      console.log(`Component ${wrappedName} is mounted`);
    }

    componentWillUnmount() {
        const wrappedName = getDisplayName(WrappedComponent);
        console.log(`Component ${wrappedName} is going to unmount`);
    }

    render() {
      return <WrappedComponent />;
    }
    WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;
    return WithLogging;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}