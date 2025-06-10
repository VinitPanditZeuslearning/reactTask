import React from 'react'
import styled from 'styled-components'
import VerticalLine from './VerticalLine'
const Container = styled.div`
background-color: #ffffff;
padding: 8px;
.mainContainer {
    display: flex;
    flex-direction: row;
    position: relative;
    margin: auto;
    width: 100%;
}
img {
    margin: 16px;
    height: 157px;
}
.SubjContent {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 16px;
    gap: 7px;
}
.itemContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(476px, 1fr));
    grid-template-rows: repeat(auto-fit, 246px);
    gap: 24px;
    height: 100%;
    width: 100%;
    margin-top: 16px;
    /* margin: 16px; */
}
.itemName {
    font-weight: 600;
    font-size: 16px;
    width: 100%;
}
.itemContent {
    width: 50%;
}
.itemsubjGrade {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 9px;
}
.simpTxt {
    font-size: 12px;
    color: #666666;
}
.CourseContent {
    display: flex;
    gap: 8px;
    align-items: center;
    padding-left: 5px;
}
b {
    color: black;
    margin-right: 5px;
}
.teachersDropDown {
    width: 100%;
}
.studentsNdate {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}
.recentClass {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: space-between;
}
.favLogo {
    position: absolute;
    height: 24px;
    width: 24px;
    top: 0;
    right: 0;
}
.lowerBar {
    /* width: 100%; */
    margin: 16px;
}
.iconsCont {
    display: flex;
    /* gap: 101px; */
    justify-content: space-around;
}
.iconsCont img {
    height: 20px;
}
`
export default function Items({ img, topicName, Subject, Grade, units, lessons, topics, recentClass, isFav, iconsObj }) {
    return (
        <Container>
            <div className='mainContainer'>
                <img src={img} alt="" />
                <img src="./static/favourite.svg" alt="" className='favLogo' style={{ display: isFav ? "inline" : "none" }} />
                <div class="itemContent">
                    <div class="SubjContent">
                        <div className='itemName' > {topicName}</div>
                        <div className='itemsubjGrade'>
                            <span className='simpTxt itemSubjName' >{Subject}</span>
                            <VerticalLine size={12} />
                            <span className='simpTxt itemGrade' >{`Grade: ${Grade}`}</span>
                        </div>
                        <div className='CourseContent'>
                            <div className='simpTxt units' >
                                <b>{units}</b>
                                Units
                            </div>
                            <div className='simpTxt Lessons' >
                                <b>{lessons}</b>
                                Lessons
                            </div>
                            <div className='simpTxt Topics' >
                                <b>{topics}</b>
                                Topics
                            </div>
                        </div>
                        <div className='recentClass'>
                            <div>
                                <select name="teachers" class="dropDown teachersDropDown">
                                    {
                                        (!recentClass?.teachers || recentClass.teachers.length === 0)
                                            ? (<option style={{ color: "#666666" }} value={"NoClasses"}>

                                                No Classes
                                            </option>)
                                            : recentClass.teachers.map((nam, index) => (
                                                <option key={index} value={nam}>{nam}</option>
                                            ))
                                    }
                                </select>
                                <hr />
                            </div>

                            <div className='studentsNdate'>
                                <div className='simpTxt'>
                                    <span>{recentClass.students} </span>
                                    students
                                </div>

                                <VerticalLine />

                                <div className='simpTxt'>
                                    {recentClass.Date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='loweBar'>
                <hr />
                <div className='iconsCont'>
                    <img src="./static/preview.svg" alt="" style={{ opacity: iconsObj.preview ? 1 : 0.2 }} />
                    <img src="./static/reports.svg" alt="" style={{ opacity: iconsObj.reports ? 1 : 0.2 }} />
                    <img src="./static/manage_course.svg" alt="" style={{ opacity: iconsObj.manage_course ? 1 : 0.2 }} />
                    <img src="./static/grade_submissions.svg" alt="" style={{ opacity: iconsObj.grade_submissions ? 1 : 0.2 }} />
                </div>
            </div>
        </Container>
    )
}
