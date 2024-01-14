import React from 'react'
import { IFormValues } from '../Setting'
import { Button } from 'antd'

interface IComponentProps {
	formValues?: IFormValues
}

const Component: React.FC<IComponentProps> = ({ formValues }) => {
	const { text } = formValues || {}
	return <Button type='primary'>{text}</Button>
}

export default Component
