import {Component} from 'react'
import {
  Container,
  TextContainer,
  Header,
  SaveContaier,
  InputField,
  Button,
  Para,
} from './styledComponents'

const buttonStatusConstants = {
  save: 'SAVE',
  edit: 'EDIT',
}

class Editable extends Component {
  state = {
    inputText: '',
    buttonStatus: buttonStatusConstants.save,
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onSave = () => {
    this.setState({buttonStatus: buttonStatusConstants.edit})
  }

  onEdit = () => {
    this.setState({buttonStatus: buttonStatusConstants.save})
  }

  renderSave = () => {
    const {inputText} = this.state
    return (
      <SaveContaier>
        <InputField
          type="text"
          value={inputText}
          onChange={this.onChangeInput}
        />
        <Button type="button" className="button" onClick={this.onSave}>
          Save
        </Button>
      </SaveContaier>
    )
  }

  renderEdit = () => {
    const {inputText} = this.state
    return (
      <SaveContaier>
        <Para className="paragraph">{inputText}</Para>
        <Button type="button" className="button" onClick={this.onEdit}>
          Edit
        </Button>
      </SaveContaier>
    )
  }

  render() {
    const {buttonStatus} = this.state
    return (
      <Container>
        <TextContainer>
          <Header className="heading">Editable Text Input</Header>
          {buttonStatus === buttonStatusConstants.save
            ? this.renderSave()
            : this.renderEdit()}
        </TextContainer>
      </Container>
    )
  }
}

export default Editable
