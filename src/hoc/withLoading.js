import React from "react";
import Spinner from "components/spinner";

/**
 * Spinner yoki Wrapper Componentani korsatishga mo'ljallangan HOC
 * @param {string} loadingKey - spinner yoki componentani ko'rsating kaliti
 * @param {string} firstFechingKey - agar berilsa componentDidMount ishlaydi
 */
const withLoading = (loadingKey, firstFechingKey = "") => (Wrapper) => {
  return class WithLoading extends React.Component {
    async componentDidMount() {
      if (this.props[firstFechingKey]) {
        this.props[firstFechingKey]();
      }
    }
    render() {
      console.log("WithLoading", this.props);
      return this.props[loadingKey] ? <Spinner /> : <Wrapper {...this.props} />;
    }
  };
};

export default withLoading;
