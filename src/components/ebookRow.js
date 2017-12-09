export default class EbookRow extends React.Component {
    render() {
      return (
        <div className="ebook-row">
            <span className="ebook=name">{this.props.name}</span>
        </div>      
      );
    }
}