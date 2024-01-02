function Two(props) {
    const { bio } = props;
    const { name, location } = bio || {};
  
    return (
      <p>
        {name && location ? (
          <span>i am {name} {location}</span>
        ) : null}
      </p>
    );
  }
  
  
  export default Two;
  