import { Handle, Position } from '@xyflow/react';
import React from 'react';
import { Icon } from '@iconify/react';
import { Flex } from 'antd';
import './base.less';
import ExpandNodeToolBar from '@/pages/Graph/Design/types/ExpandNodeToolBar';
type props = {
  data: any
}
const StartNode: React.FC<props> = ({ data }) => {
  return <>
    <div style={{
        width: data.width,
        height: data.height,
      }}
    >
      <ExpandNodeToolBar></ExpandNodeToolBar>
      <Flex vertical={true} className='cust-node-wrapper'>
        <div
          className='node-type'
        >
          <Icon
            className='type-icon'
            icon="arcticons:aggregator"></Icon>Variable Aggregator
        </div>
        <Flex className='body'>{data.label}</Flex>
      </Flex>
      <Handle
        type="target"
        position={Position.Left}
        className={'graph-node__handle'}
      ></Handle>
      <Handle
        type="source"
        position={Position.Right}
        className={'graph-node__handle'}
      ></Handle>

    </div>
  </>;
};
export default StartNode;
