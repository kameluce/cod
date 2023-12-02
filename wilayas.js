const wilayaDropdown = document.getElementById('wilaya');
const communeDropdown = document.getElementById('commune');

// Load JSON data from file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Function to populate Wilaya dropdown (no change)
    function populateWilaya() {
      const uniqueWilayas = {};
      data.forEach(item => {
        if (!uniqueWilayas[item.wilaya_name] || uniqueWilayas[item.wilaya_name].id < item.id) {
          uniqueWilayas[item.wilaya_name] = item;
        }
      });

      Object.values(uniqueWilayas).forEach(item => {
        const combinedName = `${item.wilaya_code} - ${item.wilaya_name}`;
        const option = document.createElement('option');
        option.value = item.wilaya_code; // Use wilaya_code as value
        option.textContent = combinedName;
        wilayaDropdown.appendChild(option);
      });
    }

    // Function to populate Communes based on selected Wilaya Code
    function populateCommunes() {
      const selectedWilayaCode = wilayaDropdown.value;
      // Clear commune dropdown
      communeDropdown.innerHTML = '';

      if (selectedWilayaCode === '') {
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select Commune';
        communeDropdown.appendChild(defaultOption);
        return;
      }

      const communes = data.filter(item => item.wilaya_code === selectedWilayaCode);
      if (communes.length === 0) {
        const noCommuneOption = document.createElement('option');
        noCommuneOption.value = '';
        noCommuneOption.textContent = 'No commune available';
        communeDropdown.appendChild(noCommuneOption);
        return;
      }

      const uniqueCommunes = [...new Set(communes.map(item => item.commune_name))];
      uniqueCommunes.forEach(communeName => {
        const option = document.createElement('option');
        option.value = communeName;
        option.textContent = communeName;
        communeDropdown.appendChild(option);
      });
    }

    // Call the function to populate the Wilaya dropdown initially
    populateWilaya();

    // Event listener to trigger population of communes when wilaya changes
    wilayaDropdown.addEventListener('change', populateCommunes);
  });