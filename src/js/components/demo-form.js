/* @flow */

import React from 'react';

import { BaseForm } from './base-form';
import { InputSSN } from './input-ssn';

type DemoFormProps = Object;
type DemoFormState = {
	inputTextControl: string,
	inputNumberControl: number,
	inputDateControl: string,
	inputColorControl: string,
	inputRangeControl: number,
	inputRadioControl: string,
	inputCheckboxControl: boolean,
	textareaControl: string,
	selectDropDownControl: string,
	selectListBoxControl: string,
	selectMultipleListBoxControl: string[],
	ssn: string
};

export class DemoForm extends BaseForm {

	props: DemoFormProps;
	state: DemoFormState;

	static defaultState = (): DemoFormState => ({
		inputTextControl: '',
		inputNumberControl: 0,
		inputDateControl: '2016-12-14',
		inputColorControl: '#FFFFFF',
		inputRangeControl: 0,
		inputRadioControl: '1',
		inputCheckboxControl: true,
		textareaControl: '',
		selectDropDownControl: '',
		selectListBoxControl: '',
		selectMultipleListBoxControl: [],
		ssn: ''
	});

	constructor(props: DemoFormProps) {
		super(props);
		this.state = DemoForm.defaultState();
	}

	render(): React.Element<any> {

		return <form>

			<div>
				<label>Input Text Control:</label>
				<input type="text" name="inputTextControl"
					value={this.state.inputTextControl} onChange={this.onChange} /><br />
				<span>Value: {this.state.inputTextControl}, Type: {typeof this.state.inputTextControl}</span>
			</div>

			<div>
				<label>Input Number Control:</label>
				<input type="number" name="inputNumberControl"
					value={this.state.inputNumberControl} onChange={this.onChange} /><br />
				<span>Value: {this.state.inputNumberControl}, Type: {typeof this.state.inputNumberControl}</span>
			</div>

			<div>
				<label>Input Date Control:</label>
				<input type="date" name="inputDateControl"
					value={this.state.inputDateControl} onChange={this.onChange} /><br />
				<span>Value: {this.state.inputDateControl}, Type: {typeof this.state.inputDateControl}</span>
			</div>

			<div>
				<label>Input Color Control:</label>
				<input type="color" name="inputColorControl"
					value={this.state.inputColorControl} onChange={this.onChange} /><br />
				<span>Value: {this.state.inputColorControl}, Type: {typeof this.state.inputColorControl}</span>
			</div>

			<div>
				<label>Input Range Control:</label>
				<input type="range" name="inputRangeControl"
					value={this.state.inputRangeControl} onChange={this.onChange} /><br />
				<span>Value: {this.state.inputRangeControl}, Type: {typeof this.state.inputRangeControl}</span>
			</div>

			<fieldset>

				<legend>Input Radio Options</legend>

				<div>
					<label>Input Radio Control 1:</label>
					<input type="radio" name="inputRadioControl"
						value="1" onChange={this.onChange} checked={this.state.inputRadioControl === '1'} />
				</div>		
				<div>
					<label>Input Radio Control 2:</label>
					<input type="radio" name="inputRadioControl"
						value="2" onChange={this.onChange} checked={this.state.inputRadioControl === '2'} />
				</div>		
				<div>
					<label>Input Radio Control 3:</label>
					<input type="radio" name="inputRadioControl"
						value="3" onChange={this.onChange} checked={this.state.inputRadioControl === '3'} />
				</div>		

				<span>Value: {this.state.inputRadioControl}, Type: {typeof this.state.inputRadioControl}</span>
			</fieldset>

			<div>
				<label>Input Checkbox Control:</label>
				<input type="checkbox" name="inputCheckboxControl"
					checked={this.state.inputCheckboxControl} onChange={this.onChange} /><br />
				<span>Value: {this.state.inputCheckboxControl.toString()}, Type: {typeof this.state.inputCheckboxControl}</span>
			</div>
			
			<div>
				<label>Textarea Control:</label>
				<textarea name="textareaControl" value={this.state.textareaControl} onChange={this.onChange} /><br />
				<span>Value: {this.state.textareaControl}, Type: {typeof this.state.textareaControl}</span>
			</div>

			<div>
				<label>Select DropDown Control:</label>
				<select name="selectDropDownControl" value={this.state.selectDropDownControl} onChange={this.onChange}>
					<option value=''>Select One...</option>
					<option value='1'>Option 1</option>
					<option value='2'>Option 2</option>
					<option value='3'>Option 3</option>
				</select><br />
				<span>Value: {this.state.selectDropDownControl}, Type: {typeof this.state.selectDropDownControl}</span>
			</div>

			<div>
				<label>Select ListBox Control:</label>
				<select size="5" name="selectListBoxControl" value={this.state.selectListBoxControl} onChange={this.onChange}>
					<option value='1'>Option 1</option>
					<option value='2'>Option 2</option>
					<option value='3'>Option 3</option>
				</select><br />
				<span>Value: {this.state.selectListBoxControl}, Type: {typeof this.state.selectListBoxControl}</span>
			</div>

			<div>
				<label>Select Multiple ListBox Control:</label>
				<select size="5" multiple name="selectMultipleListBoxControl" value={this.state.selectMultipleListBoxControl} onChange={this.onChange}>
					<option value='1'>Option 1</option>
					<option value='2'>Option 2</option>
					<option value='3'>Option 3</option>
				</select><br />
				<span>Value: {this.state.selectMultipleListBoxControl.join(',')}, Type: {typeof this.state.selectMultipleListBoxControl}</span>
			</div>


			<div>
				<label>SSN:</label>
				<InputSSN name="ssn" value={this.state.ssn} onChange={this.onChange} />
				<br />Value: {this.state.ssn}
			</div>

		</form>;

	}
}