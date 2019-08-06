import React from 'react';

import classes from './PinTable.css';
import Tag from '../../../components/UI/Tag/Tag';

const PinTable = ( props ) => {
    // console.log(props.tag);
    // let tags = props.tag.map( tag => {
    //     return (
    //         <Tag
    //             key={tag}
    //             tagType={tag}>{tag}</Tag>  
    //     );
    // });

    return (
        <div className={classes.PinTable}>
            <div>
               <h4>{props.heading}</h4>
               <Tag tagType={props.tag}>{props.tag}</Tag>
                {/* <div>
                    {tags}
                </div>  */}
            </div>

            <div>
                <span>🗑</span>
            </div>
            
        </div>
    );
}

export default PinTable;