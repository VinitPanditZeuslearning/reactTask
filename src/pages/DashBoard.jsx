import React from 'react'
import Items from '../Components/Items'
import '../dashboard.css'
export default function DashBoard() {
    function getSelected(e){
        const selector = document.getElementById('selector');
        console.log('triggerd')
        console.log(e.target.id)
        if ( e.target.id == 'classes') {
            selector.classList.remove('selectorLeft')
            selector.classList.add('selectorRight')
        }
        else {
            selector.classList.remove('selectorRight')
            selector.classList.add('selectorLeft')
        }
    }
    return (
        <div class="mainBoard">
            <div class="corclHead">
                <div className='selector selectorLeft' id='selector'> </div>
                <div class="counts Courses selected" id='course' onClick={(e)=>{getSelected(e)}}>
                    <img src="./static/courses.svg" id='course' alt=""/>
                    <span class="boldCount" id='course'>
                            4
                    </span>
                    Courses
                </div>
                <div class="counts classes" id='classes' onClick={(e)=>{getSelected(e)}}>
                    <img src="./static/courses.svg" alt="" id='classes'/>
                        <span class="boldCount" id='classes'>4 </span>
                        Classes
                </div>
            </div>

            <div class="searchParms">
                <div class="searchRes"> showing 4 of 4 </div>

                <div class=" counts sortBy">
                    <span> SortBy: </span>
                    <div>
                        <select name="sortby" class="dropDown">
                            <option value="classes">Classes Name</option>
                            <option value="courses">Courses Name</option>
                        </select>
                        <hr/>
                    </div>
                </div>
            </div>
            <hr/>
                <div class="itemContainer">

                    <Items 
                    img={'./static/img1.svg'} 
                    topicName={"Acceleration"} 
                    Subject="Physics" 
                    Grade={7} 
                    units={4} 
                    lessons={18} 
                    topics={24} 
                    recentClass={{teachers: ["Mr.Frank's Class B"], students: 50, Date: "21-jan-2020 - 21-Aug-2020"}}
                    isFav={true}
                    iconsObj={{
                        preview: true,
                        reports: true,
                        manage_course: true,
                        grade_submissions: true
                    }} />


                    <Items
                    img={'./static/img2.svg'} 
                    topicName={"Displacement, Velocity and Speed"} 
                    Subject="Physics 2" 
                    Grade={6} 
                    units={2} 
                    lessons={15} 
                    topics={24} 
                    recentClass={{teachers: [], students: 50, Date: "21-jan-2020 - 21-Aug-2020"}}
                    iconsObj={{
                        preview: false,
                        reports: true,
                        manage_course: false,
                        grade_submissions: true
                    }}
                    isFav={true}/>


                    <Items
                    img={'./static/img3.svg'} 
                    topicName={"Displacement, Velocity and Speed"} 
                    Subject="Physics 2" 
                    Grade={6} 
                    units={2} 
                    lessons={15} 
                    topics={24} 
                    recentClass={{teachers: ["Mr.Frank's Class B"], students: 50, Date: "21-jan-2020 - 21-Aug-2020"}}
                    isFav={false}
                    iconsObj={{
                        preview: true,
                        reports: false,
                        manage_course: true,
                        grade_submissions: false
                    }}/>

                    <Items
                    img={'./static/img3.svg'} 
                    topicName={"Displacement, Velocity and Speed"} 
                    Subject="Physics 2" 
                    Grade={6} 
                    units={2} 
                    lessons={15} 
                    topics={24} 
                    recentClass={{teachers: ["Mr.Frank's Class B"], students: 50, Date: "21-jan-2020 - 21-Aug-2020"}}
                    isFav={false}
                    iconsObj={{
                        preview: true,
                        reports: true,
                        manage_course: false,
                        grade_submissions: false
                    }}/>
                </div>
        </div>
    )
}
