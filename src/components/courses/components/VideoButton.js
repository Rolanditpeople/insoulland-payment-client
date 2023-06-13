import React from 'react';
import Modal from '../../common/modal/Modal';
import VideoModalContent from './VideoModalContent';

export default class VideoButton extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      show: false,
      step: 0
    };
  }

  openModal = () => {
    this.setState({show: true});
  }

  closeModal = (event) => {
    if (event.target.className.indexOf("modal-closer") !== -1) {
      this.setState({show: false});
    }
  };

  next = () => {
    if (this.state.step + 1 < this.props.videos.length) {
      this.setState({step: this.state.step + 1});
    }
  }

  prev = () => {
    if (this.state.step > 0) {
      this.setState({step: this.state.step - 1});
    }
  }

  render() {
    const videoContent = <VideoModalContent
      videos={this.props.videos}
      step={this.state.step}
      next={this.next}
      prev={this.prev} />;
    const modal = this.state.show
      ? <Modal
          title="Scratch Videók"
          body={videoContent}
          modalStyle={""}
          closeModal={this.closeModal} />
      : null;

    return <div className="mb-3">
      <div className="text-center">
        <button className={"btn btn-lg btn-info"} onClick={this.openModal}>
          További videók
        </button>
      </div>
      { modal }
    </div>;
  }
}