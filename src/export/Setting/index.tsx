import React from 'react'
import { Form, Input } from 'antd'
import { FormProps } from 'antd/lib/form'

export type { IFormValues } from './default'
export { defaultFormValues } from './default'

interface ISettingProps {
	initialValues: FormProps['initialValues']
	onValuesChange: FormProps['onValuesChange']
}

export const Setting: React.FC<ISettingProps> = ({ onValuesChange, initialValues }) => {
	return (
		<Form onValuesChange={onValuesChange} initialValues={initialValues}>
			<Form.Item label='按钮文本' name='text' >
				<Input/>
			</Form.Item>
		</Form>
	)
}
