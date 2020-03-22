import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Avatar from '../assets/avatar.jpeg';
import Resumee from '../assets/resume.png';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={Avatar}
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2>Arnold Tung Diep</h2>
                        <h4 style={{ color: 'grey' }}>Full Stack Web Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5 style={{ color: 'grey' }}>Objective</h5>
                        <p>A creative and detailed-oriented individual working to obtain an entry-level software engineer position in a fast-paced organization where exceptional technical skills and ability to quickly adapt to change are duly compensated. Offering expertise in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, MongoDB, and MySQL.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>5533 23rd Ave S Seattle, WA 98108</p>
                        <h5>Phone</h5>
                        <p>(206) 518-7513</p>
                        <h5>Email</h5>
                        <p>tungd@uw.edu</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Printable Resume</h5>
                        <a href={Resumee} rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-file fa-3x" aria-hidden="true" />
                        </a>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={'September, 2019'}
                            endYear={'March, 2020'}
                            schoolName="UW Coding Bootcamp"
                            schoolDescription="Learned HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, and Git."
                        />

                        <Education
                            startYear={'September, 2012'}
                            endYear={'June, 2016'}
                            schoolName="University of Washington"
                            schoolDescription="Bachelor of Science in Environmental Health"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={'January, 2019'}
                            endYear={'July, 2019'}
                            jobName="Occupational Health and Safety Specialist"
                            jobDescription={`• Conducted site safety audits and inspections to identify and evaluate hazardous operations and conditions and put in place risk prevention and mitigation processes and ensured compliance to Boeing Service Provider Manual.
                            • Conducted safety meetings with service providers on site and discuss any concerns or hazards of the job to raise awareness and make improvements where needs.
                            • Performed safety related incident investigation to determine cause and effect, prepared written reports of audit findings, developed and submitted corrective measures, and performed follow-up inspections.
                            • Reviewed service provider project-specific safety plan, daily job safety analysis (JSA), LOTO program, fall- protection program, confined space entry program and permits, and pre-excavation checklist.`}
                        />

                        <Experience
                            startYear={'June, 2017'}
                            endYear={'July, 2018'}
                            jobName="City Carrier Assistant"
                            jobDescription="• Maintained good customer service and answered queries about postal regulations and services."
                        />

                        <Experience
                            startYear={'June, 2016'}
                            endYear={'June, 2017'}
                            jobName="Radiation Safety Specialist"
                            jobDescription="• Reviewed literature and researched current practices, policy documents, notices, standard for safety
                            levels/guidelines to support UW Radiofrequency (RF) program.
                            • Developed, implemented, and evaluated RF safety policies to protect UW community from RF hazards.
                            • Revised and improved other University of Washington Guidelines (UV, VL, X-Ray, IR).
                            • Conducted audits, updated and documented RF sources inventory records and statistical reports and prepared RF
                            evaluation reports to EHS Manager."
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={90}
                        />
                        <Skills
                            skill="React"
                            progress={60}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;