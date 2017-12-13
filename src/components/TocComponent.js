import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import EbookSummaryComponent from './EbookSummaryComponent';
const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.75)'
    },
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        height                :  '80%' 
        
    }
};
export default class TocComponent extends React.Component {
    constructor() {
        super();
        this.state = {
          modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
    
      openModal() {
        this.setState({modalIsOpen: true});
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
    render() {
        return (
        <div className="ebook-contents-link-toc" >
                <a href="#" onClick={this.openModal}>Contents <img src="/img/arrow.png" /> </a>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <EbookSummaryComponent 
                            title={this.props.title}
                            version={this.props.version}
                            author={this.props.author}
                        />
                        {
                            this.props.toc.chapters.map( chapter => {
                                return (
                                    <div className="toc-wrapper">
                                        <div className="toc-chapter-name">{chapter.title}</div>
                                        {
                                            chapter.indexes.map(item => {
                                                return (
                                                    <div className="toc-content">
                                                        <div className="toc-content-name">{item.title}</div>       
                                                        <div className="toc-content-page">{item.page}</div>        
                                                    </div>
                                                )        
                                            })
                                        }
                                    </div>
                                )
                            })   
                        }     
                      </Modal>
            </div>
        );
    }
};