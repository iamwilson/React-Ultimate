import * as React from 'react';

interface ITextboxProps {
  label?: string;
  name: string;
  type: string;
  value: string;
  focus?: boolean;
  placeholder?: string;
  error?: string;
  onChange?: (event: any) => void;
}

class TextBoxComponent extends React.Component<ITextboxProps> {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <label className="alert-error">{this.props.error}</label>
        <input
          name={this.props.name}
          type={this.props.type}
          value={this.props.value}
          autoFocus={this.props.focus}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default TextBoxComponent;
