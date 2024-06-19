document.addEventListener('DOMContentLoaded', function() {
    // Sample data for the nutritionist
    const nutritionistProfile = {
        id: '123456',
        name: 'Dr. John Doe',
        age: 40,
        gender: 'Male',
        phone: '+1234567890',
        email: 'john.doe@example.com',
        address: '123 Main Street, City, Country',
        nid: '1234567890',
        education: 'MD, PhD',
        certifications: 'Board Certified',
        experience: 15,
        hospital: 'Labid Hospital',
        type: 'Nutritionist'
    };

    // Populate the profile table with data
    document.getElementById('nutritionist-id').textContent = nutritionistProfile.id;
    document.getElementById('nutritionist-name').textContent = nutritionistProfile.name;
    document.getElementById('nutritionist-age').textContent = nutritionistProfile.age;
    document.getElementById('nutritionist-gender').textContent = nutritionistProfile.gender;
    document.getElementById('nutritionist-phone').textContent = nutritionistProfile.phone;
    document.getElementById('nutritionist-email').textContent = nutritionistProfile.email;
    document.getElementById('nutritionist-address').textContent = nutritionistProfile.address;
    document.getElementById('nutritionist-nid').textContent = nutritionistProfile.nid;
    document.getElementById('nutritionist-education').textContent = nutritionistProfile.education;
    document.getElementById('nutritionist-certifications').textContent = nutritionistProfile.certifications;
    document.getElementById('nutritionist-experience').textContent = nutritionistProfile.experience;
    document.getElementById('nutritionist-hospital').textContent = nutritionistProfile.hospital;
    document.getElementById('nutritionist-type').textContent = nutritionistProfile.type;
});
