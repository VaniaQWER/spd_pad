/*
 * @Author: gaofengjiao 
 * @Date: 2018-08-20 10:44:41 
 * @Last Modified by: wwb
 * @Last Modified time: 2018-09-08 02:03:27
 * 建设中页面
 */
import React, { PureComponent} from 'react';
import { Result, Icon } from 'antd-mobile';
import styles from './result.css';
class ResultInfo extends PureComponent{
  render(){
    const { result } = this.props.match.params;
    return(
      result ?
      <Result
        img={<Icon type="check-circle" size='lg' className="spe" style={{ fill: '#1F90E6', }} />}
        title="上架成功"
        message={
          <div style={{ textAlign: 'center' }}>
              <p>上架单号: GD00015180700016ZJ</p>
              <p>上架时间: 2018-07-19 09:41:42</p>
          </div>
        }
      />
      :
      <div>
        {/* <img src={require("../../assets/image/construction.svg")}  alt="正在建设中" className={styles.imgInfo}/> */}
        <h3 className={styles.title}>页面正在建设中...</h3>
      </div>
    )
  }
}

export default ResultInfo;
