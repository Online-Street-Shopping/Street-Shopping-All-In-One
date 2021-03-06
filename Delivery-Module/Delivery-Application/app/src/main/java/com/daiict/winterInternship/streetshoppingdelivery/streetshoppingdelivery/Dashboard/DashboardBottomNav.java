package com.daiict.winterInternship.streetshoppingdelivery.streetshoppingdelivery.Dashboard;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.os.Bundle;

import com.daiict.winterInternship.streetshoppingdelivery.R;
import com.ismaeldivita.chipnavigation.ChipNavigationBar;

public class DashboardBottomNav extends AppCompatActivity {
    Fragment fragment = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dashboard_bottom_nav);
        chipNavigationBarMethod();
    }


    void chipNavigationBarMethod() {
        final ChipNavigationBar chipNavigationBar;


        //Binding Hooks
        chipNavigationBar = findViewById(R.id.bottom_nav_chipnav);
        chipNavigationBar.setMenuResource(R.menu.bottom_navigation_menu);
        fragment = new FragmentFeed();
        assert fragment != null;
        getSupportFragmentManager().beginTransaction().replace(R.id.bottom_nav_users_containers, fragment).commit();

        chipNavigationBar.setOnItemSelectedListener(i->{
            switch (i) {
                case R.id.bottom_nav_feed:
                    fragment = new FragmentFeed();
                    break;

                case R.id.bottom_nav_category:
                    fragment = new FragmentCategory();
                    break;

                case R.id.bottom_nav_notifications:
                    fragment = new FragmentNotifications();
                    break;

                case R.id.bottom_nav_profile:
                    fragment = new FragmentProfile();
                    break;
            }
            assert fragment != null;
            getSupportFragmentManager().beginTransaction().replace(R.id.bottom_nav_users_containers, fragment).commit();


        });
    }

    }