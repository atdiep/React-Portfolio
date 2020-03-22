import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import Thrive from "../assets/thrive.png";
import TeamUp from "../assets/teamup.png";
import Budget from "../assets/budget.png";
import Fitness from "../assets/fitness.png";
import Burger from "../assets/burger.png";
import Note from "../assets/note.png";


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div>
                    <div className="projects-grid">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '176px', background: `url(${Thrive}) center / cover` }} >Thrive</CardTitle>
                            <CardText>
                                This application helps plant lovers manage and take care of their houseplants by keeping a water schedule.
                            </CardText>
                            <CardActions border>
                                <Button href="https://github.com/hfurusho/GreenFinger" colored>GitHub</Button>
                                <Button href="https://thrive206.herokuapp.com/" colored>Live Demo</Button>
                            </CardActions>
                        </Card>

                        {/* Project 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '176px', background: `url(${TeamUp}) center / cover` }} >Team Up</CardTitle>
                            <CardText>
                                This application allows members of the community to chat and plan to play pickup sports with friends without joining a league.
                            </CardText>
                            <CardActions border>
                                <Button href="https://github.com/pedjaaaaa/ProjectTwo" colored>GitHub</Button>
                                <Button href="https://sapsteamnewapp.herokuapp.com/" colored>Live Demo</Button>
                            </CardActions>
                        </Card>

                        {/* Project 3 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '176px', background: `url(${Budget}) center / cover` }} >Budget Tracker</CardTitle>
                            <CardText>
                                This application allows the user to track withdrawals and deposits with or without a data/internet connection so that their account balance is accurate when traveling.
                            </CardText>
                            <CardActions border>
                                <Button href="https://github.com/atdiep/Budget-Tracker" colored>GitHub</Button>
                                <Button href="https://budget-atd.herokuapp.com/" colored>Live Demo</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="projects-grid">
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '176px', background: `url(${Fitness}) center / cover` }} >Fitness Tracker</CardTitle>
                            <CardText>
                            This application allows the user to view, create and track daily workouts. It able to log multiple exercises in a workout on a given day.
                            </CardText>
                            <CardActions border>
                                <Button href="https://github.com/atdiep/Workout-Tracker" colored>GitHub</Button>
                                <Button href="https://workout-atd.herokuapp.com/" colored>Live Demo</Button>
                            </CardActions>
                        </Card>

                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '176px', background: `url(${Burger}) center / cover` }} >Yummy Burger</CardTitle>
                            <CardText>
                            This eating application allows you to choose a burger you wish to eat and given the user the option to devour the burger.
                            </CardText>
                            <CardActions border>
                                <Button href="https://github.com/atdiep/Yummy-Burger" colored>GitHub</Button>
                                <Button href="https://yummy-burger-atd.herokuapp.com/" colored>Live Demo</Button>
                            </CardActions>
                        </Card>

                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '176px', background: `url(${Note}) center / cover` }} >Note Taker</CardTitle>
                            <CardText>
                            This application is created for users that need to keep track of important information so that they can be organized and keep track of tasks that need to be completed.
                            </CardText>
                            <CardActions border>
                                <Button href="https://github.com/atdiep/Note-Taker" colored>GitHub</Button>
                                <Button href="https://note-takerad.herokuapp.com/" colored>Live Demo</Button>
                            </CardActions>
                        </Card>

                    </div>
                </div>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Personal Projects</h1></div>
            )
        }
    }



    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Bootcamp Progress</Tab>
                    <Tab>Personal</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;