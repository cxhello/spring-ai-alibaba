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
    <div
      style={{
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
            style={{
              marginBottom: '-2px',
            }}
            icon="material-symbols:android-safety-outline"></Icon>Custom Node
          {data.label}
        </div>

      </Flex>
      <Handle
        type="source"
        position={Position.Right}
        className={'graph-node__handle'}
      ></Handle>
      Start
    </div>
  </>;
 };
export default StartNode;
