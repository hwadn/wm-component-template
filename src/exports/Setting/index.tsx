import React from 'react'
import { Form, Tabs, TabsProps } from 'antd'
import { FormProps } from 'antd/lib/form'

export type { IFormValues } from './default'
export { defaultFormValues } from './default'
import ContainerItems from './ContainerItems'
import DataItems from './DataITems'

interface ISettingProps {
	initialValues: FormProps['initialValues']
	onValuesChange: FormProps['onValuesChange']
}

const tabITems: TabsProps['items'] = [
  {
    label: 'Container',
    key: 'container',
    children: <ContainerItems/>
  },
  {
    label: 'Data',
    key: 'data',
    children: <DataItems/>
  },
]

export const Setting: React.FC<ISettingProps> = ({ onValuesChange, initialValues }) => {
	return (
		<Form onValuesChange={onValuesChange} initialValues={initialValues}>
      <Tabs
        defaultActiveKey='container'
        items={tabITems}
      />
			
		</Form>
	)
}
