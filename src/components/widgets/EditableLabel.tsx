import React from 'react';

interface LabelProps {
	onChange(text: string): void;
	placeholder: string;
	autoFocus: boolean;
}

interface LabelState {}

class EditableLabel extends React.Component<LabelProps, LabelState> {
	state = { text: '' };
	refDiv: HTMLDivElement;

	defaultProps: LabelProps = {
		onChange: () => {},
		placeholder: '',
		autoFocus: false,
	};

	onTextChange = (text: string) => this.setState({ text });

	componentDidMount() {
		if (this.props.autoFocus) {
			this.refDiv.focus();
		}
	}

	onBlur = () => this.props.onChange(this.state.text);

	onPaste = (ev: React.ClipboardEvent<HTMLDivElement>) => {
		ev.preventDefault();
		const text = ev.clipboardData.getData('text');
		document.execCommand('insertText', false, text);
	};

	getClassName = () =>
		`comPlainTextContentEditable ${
			this.state.text === ''
				? 'comPlainTextContentEditable--has-placeholder'
				: ''
		}`;

	render() {
		return (
			<div
				ref={ref => (this.refDiv = ref)}
				contentEditable={true}
				className={this.getClassName()}
				onPaste={e => this.onPaste(e)}
				onBlur={() => this.onBlur()}
				onInput={e => this.onTextChange(e.currentTarget.innerText)}
				placeholder={this.props.placeholder}
			/>
		);
	}
}

export default EditableLabel;
