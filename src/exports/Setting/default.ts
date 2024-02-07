import type { ButtonProps } from 'antd'

interface IContainerForm {
  margin: string
  padding: string
  backgroundColor: string
}

interface IDataForm {
	text: string
	type: ButtonProps['type']
}

export interface IFormValues {
  container: IContainerForm
  data: IDataForm
}

export const defaultFormValues: IFormValues = {
	container: {
    margin: '0 20px',
    padding: '20px 0',
    backgroundColor: '#eeeeee'
  },
  data: {
    text: '按钮',
    type: 'default',
  }
}
